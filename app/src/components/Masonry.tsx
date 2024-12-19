import React, { useEffect, useRef, useState } from 'react';

interface MasonryProps {
  columns: number;
  gap: string;
  children: React.ReactNode[];
}

const Masonry: React.FC<MasonryProps> = ({ columns, gap, children }) => {
  const [columnHeights, setColumnHeights] = useState<number[]>(Array(columns).fill(0));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newColumns = Math.max(1, Math.floor(containerWidth / 300));
        setColumnHeights(Array(newColumns).fill(0));
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getShortestColumnIndex = () => {
    return columnHeights.indexOf(Math.min(...columnHeights));
  };

  const renderChildren = () => {
    const columnsArray = Array.from({ length: columnHeights.length }, () => []);
    children.forEach((child, index) => {
      const columnIndex = getShortestColumnIndex();
      columnsArray[columnIndex].push((
        <li
          key={index}
          style={{ marginBottom: gap }}
        >
          {child}
        </li>
      ));
      setColumnHeights((prevHeights) => {
        const newHeights = [...prevHeights];
        newHeights[columnIndex] += (child as any).props.style.height + gap;
        return newHeights;
      });
    });
    return columnsArray;
  };

  return (
    <div ref={containerRef} style={{ display: 'flex', gap: `${gap}px` }}>
      {renderChildren().map((column, index) => (
        <ul key={index} style={{ flex: 1 }}>
          {column}
        </ul>
      ))}
    </div>
  );
};

export default Masonry;