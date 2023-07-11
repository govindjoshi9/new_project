import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// utils
//
import Label from '../../../Label';
import ColorPreview from '../../../ColorPreview';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object
};

export default function ShopProductCard({ product }) {
  const { name, cover, price, colors, status, priceSale } = product;
  const linkTo = `${PATH_DASHBOARD.nftMarket.root}/product/${paramCase(name)}`;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'sale' && 'error') || 'info'}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              position: 'absolute',
              textTransform: 'uppercase'
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={name} src={cover} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to={linkTo} color="inherit" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <ColorPreview colors={colors} />
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through'
              }}
            >
              {price && fCurrency(price)}
            </Typography>
            &nbsp;
            {fCurrency(priceSale)}
          </Typography>
        </Stack>
      </Stack>
    </Card>

    // <Card to={linkTo} component={RouterLink}>
    //   <Box sx={{ pt: '100%', position: 'relative' }}>
    //     {status && (
    //       <Label
    //         variant="filled"
    //         color={(status === 'sale' && 'error') || 'info'}
    //         sx={{
    //           top: 16,
    //           right: 16,
    //           zIndex: 9,
    //           position: 'absolute',
    //           textTransform: 'uppercase'
    //         }}
    //       >
    //         {status}
    //       </Label>
    //     )}
    //     <ProductImgStyle alt={name} src={cover} />
    //   </Box>

    //   <Stack spacing={2} sx={{ p: 3 }}>
    //     <Link to={linkTo} color="inherit" component={RouterLink}>
    //       <Typography variant="subtitle2" noWrap>
    //         {name}
    //       </Typography>
    //     </Link>

    //     <Stack direction="row" alignItems="center" justifyContent="space-between">
    //       <ColorPreview colors={colors} />
    //       <Typography variant="subtitle1">
    //         <Typography
    //           component="span"
    //           variant="body1"
    //           sx={{
    //             color: 'text.disabled',
    //             textDecoration: 'line-through'
    //           }}
    //         >
    //           {priceSale && priceSale.toFixed(2)}
    //         </Typography>
    //         &nbsp;
    //         {price.toFixed(2)}
    //       </Typography>
    //     </Stack>
    //   </Stack>
    // </Card>
  );
}
