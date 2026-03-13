import React from "react";
import usePost from "../hooks/usePost";
import "../onboarding/styles/sign_up.css";
import Layout from "./Layout";
import "./styles/main_style.css";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1
});

const CampaignForm = () => {
  const { formik } = usePost();

  const { values, handleChange, setFieldValue, errors, handleSubmit, isSubmitting } = formik;

  return (
    <Paper className="container main-section-wrapper" elevation={24}>
      <div className="section-form">
        <form id="form" onSubmit={handleSubmit}>
          <h1 className="header-text">Start a Campaign !</h1>

          <TextField
            label="Description"
            name="description"
            value={values.description}
            onChange={handleChange}
            variant="standard"
            error={Boolean(errors.description)}
            helperText={errors.description}
            fullWidth
          />

          <TextField
            label="From Date (optional)"
            name="fromDate"
            type="date"
            value={values.fromDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          <TextField
            label="To Date (optional)"
            name="toDate"
            type="date"
            value={values.toDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          <div style={{ marginTop: "20px" }}>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput
                type="file"
                name="image"
                onChange={(e) => setFieldValue("image", e.currentTarget.files[0])}
              />
            </Button>
          </div>

          <div style={{ marginTop: "20px" }}>
            <button type="submit" id="btn" disabled={isSubmitting}>
              Post
            </button>
          </div>

          <p className="slogn-text">
            "We Are In A Mission To Help The HelpLess <br /> Join Our Action!"
          </p>
        </form>
      </div>
    </Paper>
  );
};

export default CampaignForm;