import mongoose from "mongoose";

const ImportHistorySchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
      trim: true,
    },

    totalRows: {
      type: Number,
      required: true,
    },

    importedRows: {
      type: Number,
      required: true,
    },

    failedRows: {
      type: Number,
      required: true,
    },

    uploadedBy: {
      type: String,
      default: "Anonymous",
    },

    mappings: [
      {
        originalColumn: String,
        mappedField: String,
        confidence: Number,
      },
    ],

    validationErrors: [
      {
        row: Number,
        field: String,
        message: String,
      },
    ],

    status: {
      type: String,
      enum: ["Completed", "Partial", "Failed"],
      default: "Completed",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "ImportHistory",
  ImportHistorySchema
);