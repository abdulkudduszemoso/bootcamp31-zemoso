import React from "react";
import { makeStyles } from "@material-ui/core/styles";
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  borderRadius?: string;
  id?: string;
  sx?: any;
}
const Image = ({ src, alt, width, height, borderRadius, id }: ImageProps) => {
  const useStyles = makeStyles({
    image: {
      width: width,
      height: height,
      borderRadius: borderRadius,
    },
  });
  const classes = useStyles();

  return (
    <img
      src={src}
      alt={alt}
      id={id}
      className={classes.image}
      data-testid="image-test"
    />
  );
};

export default Image;
