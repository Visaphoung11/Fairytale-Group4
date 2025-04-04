import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Generate an array of page numbers
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center mt-8 flex-wrap gap-2">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex flex-wrap gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md border border-pink-500 ${
              page === currentPage
                ? "bg-pink-500 text-white"
                : "text-pink-500 hover:bg-pink-500 hover:text-white"
            } transition`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 sm:px-4 sm:py-2 rounded-md border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
