import type { GridItemProps } from '@chakra-ui/react';
import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react';

export default function Footer(props: GridItemProps) {
  const footerBorderColor = useColorModeValue('gray.900', 'white');

  return (
    <>
      <GridItem
        {...props}
        borderTopWidth="1px"
        borderTopColor={footerBorderColor}
        borderTopStyle="solid"
        backgroundColor="gray.800"
        color="white"
        py={8}
      >
        <Grid templateColumns="auto minmax(auto, 1200px) auto" px={6}>
          <GridItem colStart={2}>Footer</GridItem>
        </Grid>
      </GridItem>
    </>
  );
}
