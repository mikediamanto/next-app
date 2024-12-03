'use client';
import React, { ChangeEvent, useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

type Props = {
  label: string;
  name: string;
};

const ImagePicker = ({ label, name }: Props) => {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image selected</p>}
          {pickedImage && <Image src={pickedImage} alt="selectedimage" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg"
          ref={inputRef}
          onChange={handleImageChange}
        />
        <button className={classes.button} type="button" onClick={handleClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
