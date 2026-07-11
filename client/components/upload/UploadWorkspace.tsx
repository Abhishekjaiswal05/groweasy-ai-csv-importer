"use client";

import { useEffect } from "react";

import ImportProgress from "@/components/import/ImportProgress";

import { useMemo } from "react";

import ImportCard from "@/components/import/ImportCard";
import ValidationCard from "@/validation/ValidationCard";
import validateCRMData from "@/validation/validateCRMData";

import ImportResult from "@/components/import/ImportResult";

import useImport from "@/hooks/useImport";
import { transformToCRMData } from "@/services/crmTransform.service";

import useAIMapper from "@/hooks/useAIMapper";
import MappingCard from "@/components/mapping/MappingCard";

import UploadDropzone from "./UploadDropzone";
// import FilePreviewCard from "./FilePreviewCard";

import PreviewTable from "@/components/preview/PreviewTable";

import useFileUpload from "@/hooks/useFileUpload";
import useCSVParser from "@/hooks/useCSVParser";

export default function UploadWorkspace() {

  const {
    selectedFile,
    error,
    selectFile,
    clearFile,
  } = useFileUpload();

  const {
    csvData,
    loading,
    parseCSV,
  } = useCSVParser();

  const {
    report,
    loading: importLoading,
    progress,
    step,
    startImport,
  } = useImport();
  async function handleImport() {

    if (!csvData || mappings.length === 0) return;
    
    const customers =
      transformToCRMData(
        csvData,
        mappings
      );

    await startImport({
      fileName: selectedFile?.file.name ?? "customers.csv",
      customers,
      mappings,
      validationErrors,
      uploadedBy: "Abhishek",
    });
  }

  const {
    mappings,
    loading: aiLoading,
    detectFields,
    updateMapping,
  } = useAIMapper();

  const crmData = useMemo(() => {
    if (!csvData || mappings.length === 0) {
      return [];
    }

    return transformToCRMData(csvData, mappings);
  }, [csvData, mappings]);

  const validationErrors = useMemo(() => {
    return validateCRMData(crmData);
  }, [crmData]);

  function runAIMapping() {
    if (!csvData) return;

    detectFields(csvData.headers);
  }


  useEffect(() => {
    if (!selectedFile) return;

    parseCSV(selectedFile.file);

  }, [selectedFile, parseCSV]);


  return (

    <section
      className="
        mx-auto
        max-w-7xl
        space-y-8
    "
    >

      {/* Header */}

      <div className="space-y-2">

        <h1 className="text-4xl font-bold text-white">
          Import Customer Data
        </h1>

        <p className="text-slate-400">
          Upload your CSV and let AI automatically map CRM fields.
        </p>

      </div>

      {/* Upload */}

      <div className="rounded-3xl">
        <UploadDropzone
          selectedFile={selectedFile}
          error={error}
          onFileSelect={selectFile}
          onRemove={clearFile}
        />
      </div>

      {/* Loading */}

      {loading && (
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          Parsing CSV...
        </div>
      )}

      {/* Preview */}

      <div className="rounded-3xl">
        <PreviewTable csvData={csvData} />

        <div className="rounded-3xl">
          <MappingCard
            mappings={mappings}
            loading={aiLoading}
            onRunMapping={runAIMapping}
            onMappingChange={updateMapping}
          />
        </div>

        <div className="rounded-3xl">
          <ValidationCard
            errors={validationErrors}
            totalRows={crmData.length}
          />

        </div>

        <div className="rounded-3xl">
          <ImportCard
            totalRows={crmData.length}
            validRows={crmData.length - validationErrors.length}
            invalidRows={validationErrors.length}
            loading={importLoading}
            onImport={handleImport}
          />
        </div>

        {importLoading && (
          <div className="rounded-3xl">
            <ImportProgress
              progress={progress}
              step={step}
            />
          </div>
        )}

        <div className="rounded-3xl">
          <ImportResult report={report} />
        </div>

      </div>

    </section>

  );

}