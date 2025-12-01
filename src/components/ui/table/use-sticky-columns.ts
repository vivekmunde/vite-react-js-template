const useStickyColumns = () => {
  return (table: HTMLTableElement | null) => {
    if (table) {
      const tableRows = table.getElementsByTagName('tr');
      if (tableRows.length > 0) {
        const tableRowsArray = Array.from(tableRows);
        tableRowsArray.forEach(tableRow => {
          const stickyLeftCells = tableRow.getElementsByClassName(
            '--sticky-l'
          ) as HTMLCollectionOf<HTMLTableCellElement>;
          if (stickyLeftCells.length > 0) {
            const cellsArray = Array.from(stickyLeftCells);
            const leftPositions = [
              0,
              ...cellsArray.map(cell => {
                return cell.clientWidth;
              }),
            ];

            cellsArray.forEach((cell, index) => {
              cell.style.left = `${leftPositions[index]}px`;
            });

            stickyLeftCells[stickyLeftCells.length - 1].classList.add(
              'after:w-[1px]'
            );
          }

          const stickyRightCells = tableRow.getElementsByClassName(
            '--sticky-r'
          ) as HTMLCollectionOf<HTMLTableCellElement>;
          if (stickyRightCells.length > 0) {
            const cellsArray = Array.from(stickyRightCells).reverse();
            const rightPositions = [
              0,
              ...cellsArray.map(cell => {
                return cell.clientWidth;
              }),
            ];

            cellsArray.forEach((cell, index) => {
              cell.style.right = `${rightPositions[index]}px`;
            });

            stickyRightCells[0].classList.add('after:w-[1px]');
          }
        });
      }
    }
  };
};

export { useStickyColumns };
