'use client';

import { Box, Typography } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useCallback } from 'react';

export default function Documents() {
  const { setValue, watch } = useFormContext();
  const files = watch('documents') || [];

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const droppedFiles = Array.from(e.dataTransfer.files);
      setValue('documents', [...files, ...droppedFiles], { shouldValidate: true });
    },
    [files, setValue]
  );

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    setValue('documents', [...files, ...selectedFiles], { shouldValidate: true });
  };

  return (
    <Box>
      <Typography variant="h6" mb={2}>
        Step 2: Upload Documents (drag & drop or click to select)
      </Typography>

      <Box
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        sx={{
          border: '2px dashed #ccc',
          padding: 4,
          textAlign: 'center',
          cursor: 'pointer',
          mb: 2,
        }}
        onClick={() => document.getElementById('fileInput')?.click()}
      >
        Drag & drop files here, or click to select files
      </Box>

      <input
        type="file"
        multiple
        id="fileInput"
        style={{ display: 'none' }}
        onChange={onFileSelect}
      />

      {files.length > 0 && (
        <Box mt={2}>
          <Typography>Selected files:</Typography>
          <ul>
            {files.map((file: File, index: number) => (
              <li key={index}>
                {file.name} ({Math.round(file.size / 1024)} KB)
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
}
