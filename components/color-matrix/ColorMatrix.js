import { useState, useCallback, useMemo, useEffect } from "react";

import styles from "./styles.module.scss";

const COLOR_DIFF = 20;

export default function ColorMatrix() {
  const [isClient, setIsClient] = useState(false);
  const [currentSize, setSize] = useState(2);

  const { color1, color2, x, y, matrix } = useMemo(() => {
    const COLOR_DIFF = 20;
    const r1 = Math.floor(Math.random() * (256 - COLOR_DIFF));
    const r2 = r1 + COLOR_DIFF;
    const g1 = Math.floor(Math.random() * (256 - COLOR_DIFF));
    const g2 = g1 + COLOR_DIFF;
    const b1 = Math.floor(Math.random() * (256 - COLOR_DIFF));
    const b2 = b1 + COLOR_DIFF;
    const c1 = "rgb(" + r1 + ", " + g1 + ", " + b1 + ")";
    const c2 = "rgb(" + r2 + ", " + g2 + ", " + b2 + ")";
    const x = Math.floor(Math.random() * currentSize);
    const y = Math.floor(Math.random() * currentSize);
    const matrix = new Array(currentSize).fill(
      new Array(currentSize).fill(true)
    );
    return { color1: c1, color2: c2, x, y, matrix };
  }, [currentSize]);

  const onClickCallback = useCallback(() => {
    setSize(currentSize + 1);
  }, [currentSize]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.dummy} />
      <div className={styles.matrixContainer}>
        {matrix.map((row, rowIndex) => {
          return (
            <div key={`row-${rowIndex}`} className={styles.row}>
              {row.map((_, colIndex) => {
                if (rowIndex === x && colIndex === y) {
                  return (
                    <div
                      key={`row-${rowIndex}-col-${colIndex}`}
                      className={styles.cell}
                      style={{ backgroundColor: color2 }}
                      onClick={onClickCallback}
                    />
                  );
                }

                return (
                  <div
                    key={`row-${rowIndex}-col-${colIndex}`}
                    className={styles.cell}
                    style={{ backgroundColor: color1 }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
