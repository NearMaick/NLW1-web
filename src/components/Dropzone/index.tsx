import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import './styles.css';

const Dropzone: React.FC = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Imagem do estabelecimento</p>
      )}
    </div>
  );
};

export default Dropzone;
