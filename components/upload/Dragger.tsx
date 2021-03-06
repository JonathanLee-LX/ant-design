import * as React from 'react';
import Upload from './Upload';
import { UploadProps } from './interface';

export type DraggerProps = UploadProps & { height?: number };

const Dragger = (props: DraggerProps) => (
  <Upload {...props} type="drag" style={{ ...props.style, height: props.height }} />
);

export default Dragger;
