import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import useStyles from './styles';

const CommonImagePicker = ({
  t,
  title = '',
  onImageUpload = () => {},
  disabled = false,
  name = '',
  error = null,
  id = null
}) => {
  const classes = useStyles();
  const [fileName, setFileName] = useState(null);

  const handleFileReaderLoad = (file, result, e) => {
    onImageUpload({ imageData: result, imageType: file.type }, e);
  };

  const handleInputChange = e => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const fr = new FileReader();
      setFileName(file.name);
      fr.addEventListener('load', () =>
        handleFileReaderLoad(file, fr.result, e)
      );
      fr.readAsDataURL(file);
    });
  };

  return (
    <div className={classes.commonImagePicker}>
      <span className={classes.commonInputPickerTitle}>{title}</span>
      <label
        className={`${classes.commonImagePickerLabel} ${
          error ? 'invalid' : ''
        } `}
        htmlFor={id}
      >
        <PhotoCameraIcon />
        <span>{fileName || t('choosePicture')}</span>
      </label>
      <input
        className={classes.commonImagePickerInput}
        hidden
        capture
        type="file"
        id={id}
        accept="image/*"
        onChange={handleInputChange}
        disabled={disabled}
        name={name}
      />
      {error && <span className={classes.commonImagePickerError}>{error}</span>}
    </div>
  );
};

export default withTranslation('translations')(CommonImagePicker);
