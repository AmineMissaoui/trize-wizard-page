"use client";

import { Box, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useCallback } from "react";
import toast from "react-hot-toast";

export default function Documents() {
  const { setValue, watch } = useFormContext();
  const files = watch("documents") || [];

  const showToast = (newFiles: File[]) => {
    if (newFiles.length > 0) {
      toast.success(`${newFiles.length} file(s) uploaded`);
    }
  };

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      const droppedFiles = Array.from(e.dataTransfer.files);
      const updatedFiles = [...files, ...droppedFiles];
      setValue("documents", updatedFiles, { shouldValidate: true });
      showToast(droppedFiles);
    },
    [files, setValue]
  );

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
    const updatedFiles = [...files, ...selectedFiles];
    setValue("documents", updatedFiles, { shouldValidate: true });
    showToast(selectedFiles);
  };

  return (
    <Box>
      <h2>Step 2: Upload Documents (drag & drop or click to select)</h2>

      <Box
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        sx={{
          border: "2px dashed #ccc",
          padding: 4,
          textAlign: "center",
          cursor: "pointer",
          mb: 2,
        }}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        Drag & drop files here, or click to select files
      </Box>

      <input
        type="file"
        multiple
        id="fileInput"
        style={{ display: "none" }}
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
