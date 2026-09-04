import type { ReactNode } from "react";
import styles from "./ComparisonTable.module.css";

export type Cell = ReactNode | boolean;

export interface ComparisonRow {
  label: string;
  cells: Cell[];
}

export interface ComparisonTableProps {
  columns: string[];
  rows: ComparisonRow[];
  highlightColumn?: number; // 1-based index of highlighted column (e.g. 1 for 4kiptvfr.com)
  caption?: string;
}

export default function ComparisonTable({
  columns,
  rows,
  highlightColumn,
  caption,
}: ComparisonTableProps) {
  function renderCellContent(cell: Cell, isHighlighted: boolean) {
    if (cell === true) {
      return (
        <span className={styles.positiveBadge}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.badgeSvg}>
            <circle cx="10" cy="10" r="9" fill="var(--accent-soft)" />
            <path d="M6 10.5L8.5 13L14 7.5" stroke="var(--accent-hover)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={styles.badgeText}>Inclus</span>
        </span>
      );
    }
    if (cell === false) {
      return (
        <span className={styles.negativeBadge}>
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" className={styles.badgeSvg}>
            <circle cx="10" cy="10" r="9" fill="var(--bg-soft)" />
            <path d="M7 10H13" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className={styles.negativeText}>Non inclus</span>
        </span>
      );
    }

    if (typeof cell === "string") {
      return (
        <span className={isHighlighted ? styles.highlightText : styles.standardText}>
          {cell}
        </span>
      );
    }

    return cell;
  }

  const firstColLabel = columns[0] || "Critères";

  return (
    <div className={styles.container}>
      {/* Desktop & Tablet Table View */}
      <div className={styles.tableWrapper} role="region" aria-label={caption ?? "Tableau comparatif"} tabIndex={0}>
        <table className={styles.table}>
          {caption ? <caption className={styles.caption}>{caption}</caption> : null}
          <thead>
            <tr>
              <th scope="col" className={styles.headerFeature}>
                <span>{firstColLabel}</span>
              </th>
              {columns.slice(1).map((colName, index) => {
                const colIdx = index + 1;
                const isHighlighted = highlightColumn === colIdx;
                return (
                  <th
                    key={colName || index}
                    scope="col"
                    className={`${styles.headerCol} ${isHighlighted ? styles.headerHighlighted : ""}`}
                  >
                    <div className={styles.headerColInner}>
                      {isHighlighted && (
                        <span className={styles.brandPill}>Recommandé</span>
                      )}
                      <span className={isHighlighted ? styles.brandTitle : styles.colTitle}>
                        {colName}
                      </span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={row.label || rowIdx} className={styles.row}>
                <th scope="row" className={styles.rowLabelCell}>
                  <span className={styles.rowLabelText}>{row.label}</span>
                </th>
                {row.cells.map((cell, cellIdx) => {
                  const colIdx = cellIdx + 1;
                  const isHighlighted = highlightColumn === colIdx;
                  return (
                    <td
                      key={cellIdx}
                      className={`${styles.cell} ${isHighlighted ? styles.cellHighlighted : ""}`}
                    >
                      {renderCellContent(cell, isHighlighted)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Card View (< 640px) */}
      <div className={styles.mobileCards} aria-hidden="true">
        {rows.map((row, rIdx) => (
          <div key={rIdx} className={styles.mobileCard}>
            <div className={styles.mobileCardHeader}>
              <span className={styles.mobileCardLabel}>{row.label}</span>
            </div>
            <div className={styles.mobileCardGrid}>
              {row.cells.map((cell, cIdx) => {
                const colIdx = cIdx + 1;
                const colName = columns[colIdx] || `Option ${colIdx}`;
                const isHighlighted = highlightColumn === colIdx;
                return (
                  <div
                    key={cIdx}
                    className={`${styles.mobileCompareItem} ${
                      isHighlighted ? styles.mobileCompareItemHighlighted : ""
                    }`}
                  >
                    <span className={styles.mobileColName}>
                      {colName}
                      {isHighlighted && <span className={styles.mobileBrandDot} />}
                    </span>
                    <div className={styles.mobileCellValue}>
                      {renderCellContent(cell, isHighlighted)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
