import "../CSS/Screen.css";
import TextField from "@mui/material/TextField";

import Box from "@mui/material/Box";
import React, { useState } from "react";

import sample from "../PDF/sample.pdf"
// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library

export function Screen() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const[file,setFile]=useState(false)
    const [defaultPdfFile]=useState(sample)
    const [viewPdf, setViewPdf]=useState(null);


  return (
    <div className="parent">
      <div className="item">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Enter FirstName"
            variant="outlined"
          />
          <br></br>
          <TextField
            id="outlined-basic"
            label="Enter LastName"
            variant="outlined"
          />
        </Box>
      </div>

      <div className="item last">
        {/* <Button id="buttonupload" variant="contained">
          Upload pdf
        </Button> */}
          <input type="file" id="myfile" name="myfile"/>

          {defaultPdfFile&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={defaultPdfFile}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}
      </div>
    </div>
  );
}
