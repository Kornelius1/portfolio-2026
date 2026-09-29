import { FaDownload } from "react-icons/fa";
import bugReports from "../data/bugReports.json";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useRef, useState } from "react";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

function QAPage() {
  const pdfContainerRef = useRef(null);
  const [pdfWidth, setPdfWidth] = useState(0);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const updatePdfWidth = () => {
      if (pdfContainerRef.current) {
        setPdfWidth(pdfContainerRef.current.clientWidth);
      }
    };

    updatePdfWidth();

    window.addEventListener("resize", updatePdfWidth);

    return () => {
      window.removeEventListener("resize", updatePdfWidth);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="min-h-screen bg-gray-50 px-12 pb-24 pt-48 text-gray-900">
      <div className="w-full">
        {/* ========================= */}
        {/* TEST CASE */}
        {/* ========================= */}
        <section className="mb-20">
          <div className="mb-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              Test Case
            </span>

            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              Contoh Test Case pada Web Simulasi
            </h2>

            <p className="mt-2 max-w-2xl leading-relaxed text-gray-600">
              Dokumentasi contoh test case yang saya buat untuk menguji alur dan
              perilaku fitur pada sebuah aplikasi web simulasi.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Header */}
            <div className="flex flex-col gap-4 border-b border-gray-200 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Lembar Kerja Dokumentasi Test Case
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Lihat dokumentasi pengujian secara langsung atau unduh
                  dokumen.
                </p>
              </div>

              <a
                href="/pdf/test-cases.pdf"
                download="Test_Case_Portfolio.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-sky-500"
              >
                <FaDownload />
                Download Dokumen
              </a>
            </div>

            {/* PDF Preview */}
            <div
              ref={pdfContainerRef}
              className="max-h-[700px] w-full overflow-auto bg-white p-3 sm:p-6"
            >
              {pdfWidth > 0 && (
                <Document
                  file="/pdf/test-cases.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <div className="flex flex-col items-center gap-6">
                    {Array.from(new Array(numPages), (_, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        width={pdfWidth}
                        renderTextLayer
                        renderAnnotationLayer
                      />
                    ))}
                  </div>
                </Document>
              )}
            </div>
          </div>
        </section>

        {/* ========================= */}
        {/* BUG REPORT */}
        {/* ========================= */}
        <section>
          <div className="mb-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-sky-600">
              Bug Report
            </span>

            <h2 className="mt-2 text-2xl font-semibold text-gray-900">
              Exploratory Testing Aplikasi Shopee
            </h2>

            <p className="mt-2 max-w-2xl leading-relaxed text-gray-600">
              Dokumentasi temuan bug yang diperoleh melalui exploratory testing
              terhadap aplikasi Shopee.
            </p>
          </div>

          <div className="space-y-10">
            {bugReports.reports.map((report) => (
              <div
                key={report.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200"
              >
                {/* ========================= */}
                {/* REPORT HEADER */}
                {/* ========================= */}
                <div className="border-b border-gray-200 px-6 py-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500">
                        Bug Report #{report.id}
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-gray-900">
                        {report.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {report.type}
                      </span>

                      {report.severity && (
                        <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
                          {report.severity}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* ========================= */}
                {/* DESCRIPTION + VIDEO */}
                {/* ========================= */}
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* ========================= */}
                  {/* DESCRIPTION LIST */}
                  {/* ========================= */}
                  <div className="px-6 lg:col-span-2">
                    <dl className="divide-y divide-gray-100">
                      {/* Title */}
                      <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Title Bug
                        </dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {report.title}
                        </dd>
                      </div>

                      {/* Bug Type */}
                      <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Bug Type
                        </dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {report.type}
                        </dd>
                      </div>

                      {/* Severity */}
                      {report.severity && (
                        <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Bug Severity
                          </dt>

                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {report.severity}
                          </dd>
                        </div>
                      )}

                      {/* Steps */}
                      <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Step to Reproduce Bug
                        </dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          <ol className="list-decimal space-y-2 pl-5">
                            {report.steps.map((step, index) => (
                              <li key={index}>{step}</li>
                            ))}
                          </ol>
                        </dd>
                      </div>

                      {/* Price Changes */}
                      {report.priceChanges && (
                        <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                          <dt className="text-sm font-medium leading-6 text-gray-900">
                            Price Changes
                          </dt>

                          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <div className="overflow-hidden rounded-md border border-gray-200">
                              <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                      Quantity
                                    </th>

                                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                                      Unit Price
                                    </th>
                                  </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-100 bg-white">
                                  {report.priceChanges.map((item) => (
                                    <tr key={item.quantity}>
                                      <td className="px-4 py-3 text-sm text-gray-700">
                                        {item.quantity} pcs
                                      </td>

                                      <td className="px-4 py-3 text-sm font-medium text-gray-900">
                                        {item.unitPrice}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </dd>
                        </div>
                      )}

                      {/* Actual Result */}
                      <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Actual Result
                        </dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {report.actualResult}
                        </dd>
                      </div>

                      {/* Expected Result */}
                      <div className="py-6 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          Expected Result
                        </dt>

                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                          {report.expectedResult}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {/* ========================= */}
                  {/* VIDEO EVIDENCE */}
                  {/* ========================= */}
                  {report.video && (
                    <div className="border-t border-gray-200 bg-gray-50 p-6 lg:border-l lg:border-t-0">
                      <div className="sticky top-28">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                          Evidence
                        </h4>

                        <p className="mt-1 text-sm text-gray-600">
                          Rekaman bukti reproduksi bug.
                        </p>

                        <div className="mt-4 flex justify-center overflow-hidden rounded-xl border border-gray-200 bg-black shadow-sm">
                          <video
                            src={report.video}
                            controls
                            preload="metadata"
                            className="h-[600px] w-auto max-w-full object-contain"
                          >
                            Browser Anda tidak mendukung pemutaran video.
                          </video>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default QAPage;
