

// // import React from 'react';
// // import Divider from '../../assets/image 50.png';
// // import Participants from './Participants';

// // export default function Stalls() {
// //   const numCols = 25;

// //   const gridData = [
// //    //  Row 1
// //     { id: 'A-001', size: '11 x 10' }, { id: 'A-002', size: '11 x 10' }, { id: 'A-003', size: '11 x 10' },
// //     { id: 'B-001', size: '8 x 9' }, { id: 'B-002', size: '8 x 9' }, { id: 'B-003', size: '8 x 9' },
// //     { id: 'B-004', size: '8 x 9' }, { id: 'B-005', size: '8 x 9' }, { id: 'B-006', size: '8 x 9' },
// //     { id: 'B-007', size: '8 x 9' }, { id: 'B-008', size: '8 x 9' },
// //     { id: 'C-001', size: '6 x 6' }, { id: 'C-002', size: '6 x 6' }, { id: 'C-003', size: '6 x 6' },
// //     { id: 'C-004', size: '6 x 6' }, { id: 'C-005', size: '6 x 6' }, { id: 'C-006', size: '6 x 6' },
// //     { id: 'C-007', size: '6 x 6' }, { id: 'C-008', size: '6 x 6' }, { id: 'C-009', size: '6 x 6' },
// //     { id: 'C-010', size: '6 x 6' }, { id: 'C-011', size: '6 x 6' }, { id: 'C-012', size: '6 x 6' },
// //     { id: 'C-013', size: '6 x 6' }, { id: 'C-014', size: '6 x 6' },
// //     // Row 2
// //     { id: 'C-015', size: '6 x 6' }, { id: 'C-016', size: '6 x 6' }, { id: 'C-017', size: '6 x 6' },
// //     { id: 'C-018', size: '6 x 6' }, { id: 'C-019', size: '6 x 6' }, { id: 'C-020', size: '6 x 6' },
// //     { id: 'C-021', size: '6 x 6' }, { id: 'C-022', size: '6 x 6' }, { id: 'C-023', size: '6 x 6' },
// //     { id: 'C-024', size: '6 x 6' }, { id: 'C-025', size: '6 x 6' }, { id: 'C-026', size: '6 x 6' },
// //     { id: 'C-027', size: '6 x 6' }, { id: 'C-028', size: '6 x 6' }, { id: 'C-029', size: '6 x 6' },
// //     { id: 'C-030', size: '6 x 6' }, { id: 'C-031', size: '6 x 6' }, { id: 'C-032', size: '6 x 6' },
// //     { id: 'C-033', size: '6 x 6' }, { id: 'C-034', size: '6 x 6' }, { id: 'C-035', size: '6 x 6' },
// //     { id: 'C-036', size: '6 x 6' }, { id: 'C-037', size: '6 x 6' }, { id: 'C-038', size: '6 x 6' },
// //     { id: 'C-039', size: '6 x 6' },
// //     // Row 3
// //     { id: 'C-040', size: '6 x 6' }, { id: 'C-041', size: '6 x 6' }, { id: 'C-042', size: '6 x 6' },
// //     { id: 'C-043', size: '6 x 6' }, { id: 'C-044', size: '6 x 6' }, { id: 'C-045', size: '6 x 6' },
// //     { id: 'C-046', size: '6 x 6' }, { id: 'C-047', size: '6 x 6' }, { id: 'C-048', size: '6 x 6' },
// //     { id: 'C-049', size: '6 x 6' }, { id: 'C-050', size: '6 x 6' }, { id: 'C-051', size: '6 x 6' },
// //     { id: 'C-052', size: '6 x 6' }, { id: 'C-053', size: '6 x 6' }, { id: 'C-054', size: '6 x 6' },
// //     { id: 'C-055', size: '6 x 6' }, { id: 'C-056', size: '6 x 6' }, { id: 'C-057', size: '6 x 6' },
// //     { id: 'C-058', size: '6 x 6' }, { id: 'C-059', size: '6 x 6' }, { id: 'C-060', size: '6 x 6' },
// //     { id: 'C-061', size: '6 x 6' }, { id: 'C-062', size: '6 x 6' }, { id: 'C-063', size: '6 x 6' },
// //     { id: 'C-064', size: '6 x 6' },
// //     // Row 4
// //     { id: 'C-065', size: '6 x 6' }, { id: 'C-066', size: '6 x 6' }, { id: 'C-067', size: '6 x 6' },
// //     { id: 'C-068', size: '6 x 6' }, { id: 'C-069', size: '6 x 6' }, { id: 'C-070', size: '6 x 6' },
// //     { id: 'C-071', size: '6 x 6' }, { id: 'C-072', size: '6 x 6' }, { id: 'C-073', size: '6 x 6' },
// //     { id: 'C-074', size: '6 x 6' }, { id: 'C-075', size: '6 x 6' }, { id: 'C-076', size: '6 x 6' },
// //     { id: 'C-077', size: '6 x 6' }, { id: 'C-078', size: '6 x 6' }, { id: 'C-079', size: '6 x 6' },
// //     { id: 'D-001', size: '7 x 4' }, { id: 'D-002', size: '7 x 4' }, { id: 'D-003', size: '7 x 4' },
// //     { id: 'D-004', size: '7 x 4' }, { id: 'D-005', size: '7 x 4' }, { id: 'D-006', size: '7 x 4' },
// //     { id: 'D-007', size: '7 x 4' }, { id: 'D-008', size: '7 x 4' }, { id: 'D-009', size: '7 x 4' },
// //     { id: 'D-010', size: '7 x 4' },
// //     // Row 5
// //     { id: 'D-011', size: '7 x 4' }, { id: 'D-012', size: '7 x 4' }, { id: 'D-013', size: '7 x 4' },
// //     { id: 'D-014', size: '7 x 4' }, { id: 'D-015', size: '7 x 4' }, { id: 'D-016', size: '7 x 4' },
// //     { id: 'D-017', size: '7 x 4' }, { id: 'D-018', size: '7 x 4' }, { id: 'D-019', size: '7 x 4' },
// //     { id: 'D-020', size: '7 x 4' }, { id: 'D-021', size: '7 x 4' }, { id: 'D-022', size: '7 x 4' },
// //     { id: 'D-023', size: '7 x 4' },
// //     { id: 'E-001', size: '6 x 3' }, { id: 'E-002', size: '6 x 3' }, { id: 'E-003', size: '6 x 3' },
// //     { id: 'E-004', size: '6 x 3' }, { id: 'E-005', size: '6 x 3' }, { id: 'E-006', size: '6 x 3' },
// //     { id: 'E-007', size: '6 x 3' }, { id: 'E-008', size: '6 x 3' }, { id: 'E-009', size: '6 x 3' },
// //     { id: 'E-010', size: '6 x 3' }, { id: 'E-011', size: '6 x 3' }, { id: 'E-012', size: '6 x 3' },
// //     // Row 6
// //     { id: 'E-013', size: '6 x 3' }, { id: 'E-014', size: '6 x 3' }, { id: 'E-015', size: '6 x 3' },
// //     { id: 'E-016', size: '6 x 3' }, { id: 'E-017', size: '6 x 3' }, { id: 'E-018', size: '6 x 3' },
// //     { id: 'E-019', size: '6 x 3' }, { id: 'E-020', size: '6 x 3' }, { id: 'E-021', size: '6 x 3' },
// //     { id: 'E-022', size: '6 x 3' }, { id: 'E-023', size: '6 x 3' }, { id: 'E-024', size: '6 x 3' },
// //     { id: 'E-025', size: '6 x 3' }, { id: 'E-026', size: '6 x 3' }, { id: 'E-027', size: '6 x 3' },
// //     { id: 'E-028', size: '6 x 3' }, { id: 'E-029', size: '6 x 3' }, { id: 'E-030', size: '6 x 3' },
// //     { id: 'E-031', size: '6 x 3' }, { id: 'E-032', size: '6 x 3' }, { id: 'E-033', size: '6 x 3' },
// //     { id: 'E-034', size: '6 x 3' }, { id: 'F-001', size: '3 x 3' }, { id: 'F-002', size: '3 x 3' },
// //     { id: 'F-003', size: '3 x 3' },
// //     // Row 7
// //     { id: 'F-004', size: '3 x 3' }, { id: 'F-005', size: '3 x 3' }, { id: 'F-006', size: '3 x 3' },
// //     { id: 'F-007', size: '3 x 3' }, { id: 'F-008', size: '3 x 3' }, { id: 'F-009', size: '3 x 3' },
// //     { id: 'F-010', size: '3 x 3' }, { id: 'F-011', size: '3 x 3' }, { id: 'F-012', size: '3 x 3' },
// //     { id: 'F-013', size: '3 x 3' }, { id: 'F-014', size: '3 x 3' }, { id: 'F-015', size: '3 x 3' },
// //     { id: 'F-016', size: '3 x 3' }, { id: 'F-017', size: '3 x 3' }, { id: 'F-018', size: '3 x 3' },
// //     { id: 'F-019', size: '3 x 3' }, { id: 'F-020', size: '3 x 3' }, { id: 'F-021', size: '3 x 3' },
// //     { id: 'F-022', size: '3 x 3' }, { id: 'F-023', size: '3 x 3' }, { id: 'F-024', size: '3 x 3' },
// //     { id: 'F-025', size: '3 x 3' }, { id: 'F-026', size: '3 x 3' }, { id: 'F-027', size: '3 x 3' },
// //     { id: 'F-028', size: '3 x 3' },
// //     // Row 8
// //     { id: 'F-029', size: '3 x 3' }, { id: 'F-030', size: '3 x 3' }, { id: 'F-031', size: '3 x 3' },
// //     { id: 'F-032', size: '3 x 3' }, { id: 'F-033', size: '3 x 3' }, { id: 'F-034', size: '3 x 3' },
// //     { id: 'F-035', size: '3 x 3' }, { id: 'F-036', size: '3 x 3' }, { id: 'F-037', size: '3 x 3' },
// //     { id: 'F-038', size: '3 x 3' }, { id: 'F-039', size: '3 x 3' }, { id: 'F-040', size: '3 x 3' },
// //     { id: 'F-041', size: '3 x 3' }, { id: 'F-042', size: '3 x 3' }, { id: 'F-043', size: '3 x 3' },
// //     { id: 'F-044', size: '3 x 3' }, { id: 'F-045', size: '3 x 3' }, { id: 'F-046', size: '3 x 3' },
// //     { id: 'F-047', size: '3 x 3' }, { id: 'F-048', size: '3 x 3' }, { id: 'F-049', size: '3 x 3' },
// //     { id: 'F-050', size: '3 x 3' }, { id: 'F-051', size: '3 x 3' }, { id: 'F-052', size: '3 x 3' },
// //     { id: 'F-053', size: '3 x 3' },
// //     // Row 9
// //     { id: 'F-054', size: '3 x 3' }, { id: 'F-055', size: '3 x 3' }, { id: 'F-056', size: '3 x 3' },
// //     { id: 'F-057', size: '3 x 3' }, { id: 'F-058', size: '3 x 3' }, { id: 'F-059', size: '3 x 3' },
// //     { id: 'F-060', size: '3 x 3' }, { id: 'F-061', size: '3 x 3' }, { id: 'F-062', size: '3 x 3' },
// //     { id: 'F-063', size: '3 x 3' }, { id: 'F-064', size: '3 x 3' }, { id: 'F-065', size: '3 x 3' },
// //     { id: 'F-066', size: '3 x 3' }, { id: 'F-067', size: '3 x 3' }, { id: 'F-068', size: '3 x 3' },
// //     { id: 'F-069', size: '3 x 3' }, { id: 'F-070', size: '3 x 3' }, { id: 'F-071', size: '3 x 3' },
// //     { id: 'F-072', size: '3 x 3' }, { id: 'F-073', size: '3 x 3' }, { id: 'F-074', size: '3 x 3' },
// //     { id: 'F-075', size: '3 x 3' }, { id: 'F-076', size: '3 x 3' }, { id: 'F-077', size: '3 x 3' },
// //     { id: 'F-078', size: '3 x 3' },
// //     // Row 10
// //     { id: 'F-079', size: '3 x 3' }, { id: 'F-080', size: '3 x 3' }, { id: 'F-081', size: '3 x 3' },
// //     { id: 'F-082', size: '3 x 3' }, { id: 'F-083', size: '3 x 3' }, { id: 'F-084', size: '3 x 3' },
// //     { id: 'F-085', size: '3 x 3' }, { id: 'F-086', size: '3 x 3' }, { id: 'F-087', size: '3 x 3' },
// //     { id: 'F-088', size: '3 x 3' }, { id: 'F-089', size: '3 x 3' }, { id: 'F-090', size: '3 x 3' },
// //     { id: 'F-091', size: '3 x 3' }, { id: 'F-092', size: '3 x 3' }, { id: 'F-093', size: '3 x 3' },
// //     { id: 'F-094', size: '3 x 3' }, { id: 'F-095', size: '3 x 3' }, { id: 'F-096', size: '3 x 3' },
// //     { id: 'F-097', size: '3 x 3' }, { id: 'F-098', size: '3 x 3' }, { id: 'F-099', size: '3 x 3' },
// //     { id: 'F-100', size: '3 x 3' }, { id: 'F-101', size: '3 x 3' }, { id: 'F-102', size: '3 x 3' },
// //     { id: 'F-103', size: '3 x 3' },
// //     // Row 11
// //     { id: 'F-104', size: '3 x 3' }, { id: 'F-105', size: '3 x 3' }, { id: 'F-106', size: '3 x 3' },
// //     { id: 'F-107', size: '3 x 3' }, { id: 'F-108', size: '3 x 3' }, { id: 'F-109', size: '3 x 3' },
// //     { id: 'F-110', size: '3 x 3' }, { id: 'F-112', size: '3 x 3' }, { id: 'F-113', size: '3 x 3' },
// //     { id: 'F-114', size: '3 x 3' }, { id: 'F-115', size: '3 x 3' }, { id: 'F-116', size: '3 x 3' },
// //     { id: 'F-117', size: '3 x 3', highlight: true }, { id: 'F-118', size: '3 x 3' }, { id: 'F-119', size: '3 x 3' },
// //     { id: 'F-120', size: '3 x 3' }, { id: 'F-121', size: '3 x 3' }, { id: 'F-122', size: '3 x 3' },
// //     { id: 'F-123', size: '3 x 3' }, { id: 'F-124', size: '3 x 3' }, { id: 'F-125', size: '3 x 3' },
// //     { id: 'F-126', size: '3 x 3' }, { id: 'F-127', size: '3 x 3' }, { id: 'F-128', size: '3 x 3' },
// //     { id: 'F-129', size: '3 x 3' },
// //     // Row 12
// //     { id: 'F-130', size: '3 x 3' }, { id: 'F-131', size: '3 x 3' }, { id: 'F-132', size: '3 x 3' },
// //     { id: 'F-133', size: '3 x 3' }, { id: 'F-134', size: '3 x 3' }, { id: 'F-135', size: '3 x 3' },
// //     { id: 'F-136', size: '3 x 3' }, { id: 'F-137', size: '3 x 3' }, { id: 'F-138', size: '3 x 3' },
// //     { id: 'F-139', size: '3 x 3' }, { id: 'F-140', size: '3 x 3' }, { id: 'F-141', size: '3 x 3' },
// //     { id: 'F-142', size: '3 x 3' }, { id: 'F-143', size: '3 x 3' }, { id: 'F-144', size: '3 x 3' },
// //     { id: 'F-145', size: '3 x 3' }, { id: 'F-146', size: '3 x 3' }, { id: 'F-147', size: '3 x 3' },
// //     { id: 'F-148', size: '3 x 3' }, { id: 'F-149', size: '3 x 3' }, { id: 'F-150', size: '3 x 3' },
// //     { id: 'F-151', size: '3 x 3' }, { id: 'F-152', size: '3 x 3' }, { id: 'F-153', size: '3 x 3' },
// //     { id: 'F-154', size: '3 x 3' },
// //     // Row 13
// //     { id: 'F-155', size: '3 x 3' }, { id: 'F-156', size: '3 x 3' }, { id: 'F-157', size: '3 x 3' },
// //     { id: 'F-158', size: '3 x 3' },
// //     { id: 'G-001', size: '2 x 2' }, { id: 'G-002', size: '2 x 2' }, { id: 'G-003', size: '2 x 2' },
// //     { id: 'G-004', size: '2 x 2' }, { id: 'G-005', size: '2 x 2' }, { id: 'G-006', size: '2 x 2' },
// //     { id: 'G-007', size: '2 x 2' }, { id: 'G-008', size: '2 x 2' }, { id: 'G-009', size: '2 x 2' },
// //     { id: 'G-010', size: '2 x 2' }, { id: 'G-011', size: '2 x 2' }, { id: 'G-012', size: '2 x 2' },
// //     { id: 'G-013', size: '2 x 2' }, { id: 'G-014', size: '2 x 2' }, { id: 'G-015', size: '2 x 2' },
// //     { id: 'G-016', size: '2 x 2' }, { id: 'G-017', size: '2 x 2' }, { id: 'G-018', size: '2 x 2' },
// //     { id: 'G-019', size: '2 x 2' }, { id: 'G-020', size: '2 x 2' }, { id: 'G-021', size: '2 x 2' },
// //     // Row 14
// //     { id: 'G-022', size: '2 x 2' }, { id: 'G-023', size: '2 x 2' }, { id: 'G-024', size: '2 x 2' },
// //     { id: 'G-025', size: '2 x 2' }, { id: 'G-026', size: '2 x 2' }, { id: 'G-027', size: '2 x 2' },
// //     { id: 'G-028', size: '2 x 2' }, { id: 'G-029', size: '2 x 2' }, { id: 'G-030', size: '2 x 2' },
// //     { id: 'G-031', size: '2 x 2' }, { id: 'G-032', size: '2 x 2' }, { id: 'G-033', size: '2 x 2' },
// //     { id: 'G-034', size: '2 x 2', highlight: true }, { id: 'G-035', size: '2 x 2' }, { id: 'G-036', size: '2 x 2' },
// //     { id: 'G-037', size: '2 x 2' }, { id: 'G-038', size: '2 x 2' }, { id: 'G-039', size: '2 x 2' },
// //     { id: 'G-040', size: '2 x 2' }, { id: 'G-041', size: '2 x 2' }, { id: 'G-042', size: '2 x 2' },
// //     { id: 'G-043', size: '2 x 2' }, { id: 'G-044', size: '2 x 2' }, { id: 'G-045', size: '2 x 2' },
// //     { id: 'G-046', size: '2 x 2' },
// //     // Row 15
// //     { id: 'G-047', size: '2 x 2' }, { id: 'G-048', size: '2 x 2' }, { id: 'G-049', size: '2 x 2' }
// //   ];

// //   // Derive rows from flat list
// //   const rows = [];
// //   for (let i = 0; i < gridData.length; i += numCols) {
// //     rows.push(gridData.slice(i, i + numCols));
// //   }

// //   return (
// //     <>
// //       <style>
// //         {`
// //         * {
// //           margin: 0;
// //           padding: 0;
// //           box-sizing: border-box;
// //         }
// //         body {
// //           background-color: #f5f5f5;
// //           font-family: Arial, sans-serif;
// //         }
// //         .main-container {
// //           background-color: white;
// //           padding: 40px 40px 30px;
// //           border-radius: 8px;
// //           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// //           max-width: 100%;
// //           overflow-x: auto;
// //         }
// //         .header {
// //           position: relative;
// //           text-align: center;
// //           margin-bottom: 40px;
// //         }
// //         .header-title {
// //           font-size: 36px;
// //           font-weight: bold;
// //           color: #333;
// //         }
// //         .divider-line {
// //           width: 250px;
// //           height: 3px;
// //           border-radius: 2px;
// //           margin: 10px auto 0;
// //         }
// //         .download-btn {
// //           margin-right:58px;
// //           position: absolute;
// //           right: 0;
// //           top: 0;
// //           background-color: #FF7417;
// //           color: white;
// //           border: none;
// //           padding: 12px 24px;
// //           border-radius: 8px;
// //           cursor: pointer;
// //           font-size: 16px;
// //           font-weight: 600;
// //           transition: background-color 0.3s;
// //         }
// //         .download-btn:hover {
// //           background-color: #e56310;
// //         }

// //         .grid-wrapper {
// //           padding: 0 20px;
// //           overflow-x: auto;
// //         }
// //         .grid-table {
// //           border-collapse: collapse;
// //           margin: 0 auto;
// //         }
// //         .grid-table th, .grid-table td {
// //           padding: 3px;
// //           text-align: center;
// //           vertical-align: middle;
// //         }
// //         .grid-table th {
// //           font-size: 13px;
// //           font-weight: 600;
// //           color: #555;
// //           padding-bottom: 8px;
// //         }
// //         .row-label-cell {
// //           font-size: 13px;
// //           font-weight: 600;
// //           color: #555;
// //           padding-right: 8px;
// //         }
// //         .stall-cell {
// //           width: 53px;
// //           height: 50px;
// //         }
// //         .stall-content {
// //           background: radial-gradient(circle, #ffffff 30%, #c8e6c9 70%);

// //           border: 1px solid #81c784;
// //           border-radius: 5px;
// //           width: 100%;
// //           height: 100%;
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           justify-content: center;
// //           cursor: pointer;
// //           transition: transform 0.2s;
// //         }
        
// //         .stall-content.highlight {
// //           background-color: #ffccbc;
// //           border-color: #ff8a65;
// //         }
// //         .stall-id {
// //           font-size: 10px;
// //           font-weight: bold;
// //           color: #111111;
// //           margin-bottom: 2px;
// //         }
// //         .stall-size {
// //           font-size: 8px;
// //           color: #111111;
// //         }
// //         .stall-content.highlight .stall-id,
// //         .stall-content.highlight .stall-size {
// //           color: #d84315;
// //         }
// //           .legend {
// //   margin-top: 30px;
// //   margin-left: 40px;
// //   display: flex;
// //   gap: 20px;
// //   align-items: center;
// // }

// // .legend-item {
// //   display: flex;
// //   align-items: center;
// //   font-size: 14px;
// //   font-weight: 600;
// //   color: #444;
// // }

// // .checkbox {
// //   width: 18px;
// //   height: 18px;
// //   margin-right: 8px;
// //   appearance: none;
// //   border: 2px solid gray; /* fallback */
// //   border-radius: 4px;
// //   background-color: white;
// //   pointer-events: none;
// // }

// // .checkbox.booked {
// //   border-color: #d84315; /* Dark Brown */
// // }

// // .checkbox.available {
// //   border-color: green;
// // }

// //       `}
// //       </style>

// //       <div className="main-container">
// //         <div className="header">
// //           <h1 className="header-title">Exhibitor Stalls</h1>
// //           <div className="divider-line">
// //             <img src={Divider} alt="Divider" />
// //           </div>
// //           <button className="download-btn">Download</button>
// //         </div>

// //         <div className="grid-wrapper">
// //           <table className="grid-table">
// //             {/* 🔴 REMOVED COLUMN HEADERS (1, 2, 3, ...) */}
// //             {/* <thead>
// //               <tr>
// //                 <th></th>
// //                 {colLabels.map((colNum) => (
// //                   <th key={colNum}>{colNum}</th>
// //                 ))}
// //               </tr>
// //             </thead> */}

// //             <tbody>
// //               {rows.map((rowArray, rowIndex) => {
// //                 // 🔴 REMOVED ROW LABELS (A, B, C, ...)
// //                 return (
// //                   <tr key={rowIndex}>
// //                     {/* <td className="row-label-cell">{String.fromCharCode(65 + rowIndex)}</td> */}
// //                     {rowArray.map((stall, colIndex) => (
// //                       <td key={colIndex} className="stall-cell">
// //                         <div
// //                           className={`stall-content ${stall.highlight ? 'highlight' : ''}`}
// //                         >
// //                           <div className="stall-id">{stall.id}</div>
// //                           <div className="stall-size">{stall.size}</div>
// //                         </div>
// //                       </td>
// //                     ))}
// //                   </tr>
// //                 );
// //               })}
// //             </tbody>
// //           </table>
// //           <div className="legend">
// //   <label className="legend-item">
// //     <input type="checkbox" disabled className="checkbox booked" />
// //     <span>Booked</span>
// //   </label>
// //   <label className="legend-item">
// //     <input type="checkbox" disabled className="checkbox available" />
// //     <span>Available</span>
// //   </label>
// // </div>

// //         </div>
// //       </div>
// //       <Participants/>
// //     </>
// //   );
// // }






// import React, { useState, useEffect } from 'react';
// import Divider from '../../assets/image 50.png';
// import Participants from './Participants';
// import axios from 'axios';

// export default function Stalls({ darkMode }) {
//   const numCols = 25;

//   const [gridData, setGridData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchStalls = async () => {
//       try {
//         const resp = await axios.get('http://localhost:5000/api/stalls');
//         // Expect resp.data to be an array of stalls with id, size, status, maybe highlight
//         setGridData(resp.data);
//       } catch (err) {
//         console.error('Error fetching stalls:', err);
//         setError('Failed to load stalls');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStalls();
//   }, []);

//   // Derive rows
//   const rows = [];
//   for (let i = 0; i < gridData.length; i += numCols) {
//     rows.push(gridData.slice(i, i + numCols));
//   }

//   if (loading) {
//     return <div className="no-data-message">Loading stalls...</div>;
//   }
//   if (error) {
//     return <div className="no-data-message" style={{ color: 'red' }}>{error}</div>;
//   }

//   return (
//     <>
//       <style>{`
//         * { margin: 0; padding: 0; box-sizing: border-box; }
//         body { background-color: #f5f5f5; font-family: Arial, sans-serif; }
//         .main-container {
//           background-color: white;
//           padding: 40px 40px 30px;
//           border-radius: 8px;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//           max-width: 100%;
//           overflow-x: auto;
//         }
//         .header {
//           position: relative;
//           text-align: center;
//           margin-bottom: 40px;
//         }
//         .header-title {
//           font-size: 36px;
//           font-weight: bold;
//           color: #333;
//         }
//         .divider-line img {
//           width: 220px;
//           max-height: 14px; 
//           display: block;   
//           margin: 10px auto; 
//           border-radius: 2px;
//         }
//         .download-btn {
//           position: absolute;
//           right: 0;
//           top: 0;
//           background-color: #FF7417;
//           color: white;
//           border: none;
//           padding: 12px 24px;
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 16px;
//           font-weight: 600;
//           transition: background-color 0.3s;
//         }
//         .download-btn:hover {
//           background-color: #e56310;
//         }
//         .grid-wrapper {
//           padding: 0 20px;
//           overflow-x: auto;
//         }
//         .grid-table {
//           border-collapse: collapse;
//           margin: 0 auto;
//         }
//         .grid-table td {
//           padding: 3px;
//           text-align: center;
//           vertical-align: middle;
//         }
//         .stall-cell {
//           width: 53px;
//           height: 50px;
//         }
//         .stall-content {
//           background: radial-gradient(circle, #ffffff 30%, #c8e6c9 70%);
//           border: 1px solid #81c784;
//           border-radius: 5px;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: transform 0.2s;
//         }
//         .stall-content.booked {
//           background-color: #ffccbc;
//           border-color: #ff8a65;
//         }
//         .stall-id {
//           font-size: 10px;
//           font-weight: bold;
//           color: #111111;
//           margin-bottom: 2px;
//         }
//         .stall-size {
//           font-size: 8px;
//           color: #111111;
//         }
//         .stall-content.booked .stall-id,
//         .stall-content.booked .stall-size {
//           color: #d84315;
//         }
//         .legend {
//           margin-top: 30px;
//           margin-left: 40px;
//           display: flex;
//           gap: 20px;
//           align-items: center;
//         }
//         .legend-item {
//           display: flex;
//           align-items: center;
//           font-size: 14px;
//           font-weight: 600;
//           color: #444;
//         }
//         .checkbox {
//           width: 18px;
//           height: 18px;
//           margin-right: 8px;
//           appearance: none;
//           border: 2px solid gray;
//           border-radius: 4px;
//           background-color: white;
//           pointer-events: none;
//         }
//         .checkbox.booked {
//           border-color: #d84315;
//         }
//         .checkbox.available {
//           border-color: green;
//         }
//         .no-data-message {
//           text-align: center;
//           margin-top: 60px;
//           color: #374151;
//           font-size: 18px;
//           font-weight: 600;
//         }
//       `}</style>

//       <div className="main-container">
//         <div className="header">
//           <h1 className="header-title">Exhibitor Stalls</h1>
//           <div className="divider-line">
//             <img src={Divider} alt="Divider" />
//           </div>
//           <button className="download-btn">Download</button>
//         </div>

//         <div className="grid-wrapper">
//           <table className="grid-table">
//             <tbody>
//               {rows.map((rowArray, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {rowArray.map((stall, colIndex) => (
//                     <td key={colIndex} className="stall-cell">
//                       <div
//                         className={`stall-content ${stall.status === 'booked' ? 'booked' : ''}`}
//                       >
//                         <div className="stall-id">{stall.id}</div>
//                         <div className="stall-size">{stall.size}</div>
//                       </div>
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="legend">
//             <label className="legend-item">
//               <input type="checkbox" disabled className="checkbox booked" />
//               <span>Booked</span>
//             </label>
//             <label className="legend-item">
//               <input type="checkbox" disabled className="checkbox available" />
//               <span>Available</span>
//             </label>
//           </div>
//         </div>
//       </div>

//       <Participants />
//     </>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import Divider from '../../assets/image 50.png';
// import Participants from './Participants';
// import axios from 'axios';

// export default function Stalls({ darkMode }) {
//   const numCols = 25;

//   const [gridData, setGridData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchStalls = async () => {
//       try {
//         const resp = await axios.get('http://localhost:5000/api/stalls');
//         setGridData(resp.data);
//       } catch (err) {
//         console.error('Error fetching stalls:', err);
//         setError('Failed to load stalls');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStalls();
//   }, []);

//   // Derive rows
//   const rows = [];
//   for (let i = 0; i < gridData.length; i += numCols) {
//     rows.push(gridData.slice(i, i + numCols));
//   }

//   if (loading) {
//     return <div className="no-data-message">Loading stalls...</div>;
//   }
//   if (error) {
//     return <div className="no-data-message" style={{ color: 'red' }}>{error}</div>;
//   }

//   return (
//     <>
//       <style>{`
//         * { margin: 0; padding: 0; box-sizing: border-box; }
//         body { background-color: #f5f5f5; font-family: Arial, sans-serif; }
//         .main-container {
//           background-color: white;
//           padding: 40px 40px 30px;
//           border-radius: 8px;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//           max-width: 100%;
//           overflow-x: auto;
//         }
//         .header {
//           position: relative;
//           text-align: center;
//           margin-bottom: 40px;
//         }
//         .header-title {
//           font-size: 36px;
//           font-weight: bold;
//           color: #333;
//         }
//         .divider-line img {
//           width: 220px;
//           max-height: 14px; 
//           display: block;   
//           margin: 10px auto; 
//           border-radius: 2px;
//         }
//         .download-btn {
//           position: absolute;
//           right: 0;
//           top: 0;
//           background-color: #FF7417;
//           color: white;
//           border: none;
//           padding: 12px 24px;
//           border-radius: 8px;
//           cursor: pointer;
//           font-size: 16px;
//           font-weight: 600;
//           transition: background-color 0.3s;
//         }
//         .download-btn:hover {
//           background-color: #e56310;
//         }
//         .grid-wrapper {
//           padding: 0 20px;
//           overflow-x: auto;
//         }
//         .grid-table {
//           border-collapse: collapse;
//           margin: 0 auto;
//         }
//         .grid-table td {
//           padding: 3px;
//           text-align: center;
//           vertical-align: middle;
//         }
//         .stall-cell {
//           width: 53px;
//           height: 50px;
//         }
//         /* Base stall-content style */
//         .stall-content {
//           border-radius: 5px;
//           width: 100%;
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: transform 0.2s, background-color 0.3s, border-color 0.3s;
//           border: 1px solid;
//           font-weight: 600;
//         }
//         /* Available stalls: green radial gradient */
//         .stall-content.available {
//           background: radial-gradient(circle, #ffffff 30%, #c8e6c9 70%);
//           border-color: #81c784;
//           color: #111111;
//         }
//         .stall-content.available .stall-id,
//         .stall-content.available .stall-size {
//           color: #111111;
//         }
//         /* Booked stalls: warm radial gradient */
//         .stall-content.booked {
//           background: radial-gradient(circle, #fff3e0 30%, #ffccbc 70%);
//           border-color: #ff8a65;
//           color: #d84315;
//         }
//         .stall-content.booked .stall-id,
//         .stall-content.booked .stall-size {
//           color: #d84315;
//         }
//         .stall-id {
//           font-size: 10px;
//           margin-bottom: 2px;
//         }
//         .stall-size {
//           font-size: 8px;
//         }
//         .legend {
//           margin-top: 30px;
//           margin-left: 40px;
//           display: flex;
//           gap: 20px;
//           align-items: center;
//         }
//         .legend-item {
//           display: flex;
//           align-items: center;
//           font-size: 14px;
//           font-weight: 600;
//           color: #444;
//         }
//         .checkbox {
//           width: 18px;
//           height: 18px;
//           margin-right: 8px;
//           appearance: none;
//           border: 2px solid gray;
//           border-radius: 4px;
//           background-color: white;
//           pointer-events: none;
//         }
//         .checkbox.booked {
//           border-color: #d84315;
//         }
//         .checkbox.available {
//           border-color: green;
//         }
//         .no-data-message {
//           text-align: center;
//           margin-top: 60px;
//           color: #374151;
//           font-size: 18px;
//           font-weight: 600;
//         }
//       `}</style>

//       <div className="main-container">
//         <div className="header">
//           <h1 className="header-title">Exhibitor Stalls</h1>
//           <div className="divider-line">
//             <img src={Divider} alt="Divider" />
//           </div>
//           <button className="download-btn">Download</button>
//         </div>

//         <div className="grid-wrapper">
//           <table className="grid-table">
//             <tbody>
//               {rows.map((rowArray, rowIndex) => (
//                 <tr key={rowIndex}>
//                   {rowArray.map((stall, colIndex) => (
//                     <td key={colIndex} className="stall-cell">
//                       <div
//                         className={`stall-content ${stall.status === 'booked' ? 'booked' : 'available'}`}
//                       >
//                         <div className="stall-id">{stall.id}</div>
//                         <div className="stall-size">{stall.size}</div>
//                       </div>
//                     </td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <div className="legend">
//             <label className="legend-item">
//               <input type="checkbox" disabled className="checkbox booked" />
//               <span>Booked</span>
//             </label>
//             <label className="legend-item">
//               <input type="checkbox" disabled className="checkbox available" />
//               <span>Available</span>
//             </label>
//           </div>
//         </div>
//       </div>

//       <Participants />
//     </>
//   );
// }



import React, { useState, useEffect } from 'react';
import Divider from '../../assets/image 50.png';
import Participants from './Participants';
import axios from 'axios';

export default function Stalls({ darkMode }) {
  const numCols = 25;

  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showStallNumber, setShowStallNumber] = useState(true);
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stallsResp = await axios.get('http://localhost:5000/api/stalls');
        setGridData(stallsResp.data);

        const settingsResp = await axios.get('http://localhost:5000/api/settings');
        setSettings(settingsResp.data);
        if (settingsResp.data && typeof settingsResp.data.showStallNumber !== 'undefined') {
          setShowStallNumber(settingsResp.data.showStallNumber);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownload = async (filePath, defaultName) => {
    if (!filePath) {
      alert('No file available for download.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5000/${filePath}`, {
        responseType: 'blob',
      });

      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', defaultName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Failed to download file.');
    }
  };

  const rows = [];
  for (let i = 0; i < gridData.length; i += numCols) {
    rows.push(gridData.slice(i, i + numCols));
  }

  if (loading) {
    return <div className="no-data-message">Loading stalls...</div>;
  }

  if (error) {
    return (
      <div className="no-data-message" style={{ color: 'red' }}>
        {error}
      </div>
    );
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background-color: #f5f5f5; font-family: Arial, sans-serif; }
        .main-container {
          background-color: white;
          padding: 40px 40px 30px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          max-width: 100%;
          overflow-x: auto;
        }
        .header {
          position: relative;
          text-align: center;
          margin-bottom: 40px;
        }
        .header-title {
          font-size: 36px;
          font-weight: bold;
          color: #333;
        }
        .divider-line img {
          width: 220px;
          max-height: 14px; 
          display: block;   
          margin: 10px auto; 
          border-radius: 2px;
        }
        .download-btn {
          position: absolute;
          right: 0;
          top: 0;
          background-color: #FF7417;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: 600;
          transition: background-color 0.3s;
        }
        .download-btn:hover {
          background-color: #e56310;
        }
        .grid-wrapper {
          padding: 0 20px;
          overflow-x: auto;
        }
        .grid-table {
          border-collapse: collapse;
          margin: 0 auto;
        }
        .grid-table td {
          padding: 3px;
          text-align: center;
          vertical-align: middle;
        }
        .stall-cell {
          width: 53px;
          height: 50px;
        }
        .stall-content {
          border-radius: 5px;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.2s, background-color 0.3s, border-color 0.3s;
          border: 1px solid;
          font-weight: 600;
        }
        .stall-content.available {
          background: radial-gradient(circle, #ffffff 30%, #c8e6c9 70%);
          border-color: #81c784;
          color: #111111;
        }
        .stall-content.booked {
          background: radial-gradient(circle, #fff3e0 30%, #ffccbc 70%);
          border-color: #ff8a65;
          color: #d84315;
        }
        .stall-number {
          font-size: 10px;
          font-weight: bold;
          margin-bottom: 2px;
        }
        .stall-size {
          font-size: 9px;
        }
        .legend {
          margin-top: 30px;
          margin-left: 40px;
          display: flex;
          gap: 20px;
          align-items: center;
        }
        .legend-item {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 600;
          color: #444;
        }
        .checkbox {
          width: 18px;
          height: 18px;
          margin-right: 8px;
          appearance: none;
          border: 2px solid gray;
          border-radius: 4px;
          background-color: white;
          pointer-events: none;
        }
        .checkbox.booked {
          border-color: #d84315;
        }
        .checkbox.available {
          border-color: green;
        }
        .no-data-message {
          text-align: center;
          margin-top: 60px;
          color: #374151;
          font-size: 18px;
          font-weight: 600;
        }
      `}</style>

      <div className="main-container">
        <div className="header">
          <h1 className="header-title">Exhibitor Stalls</h1>
          <div className="divider-line">
            <img src={Divider} alt="Divider" />
          </div>
          <button
            className="download-btn"
            onClick={() =>
              handleDownload(settings.downloadMap, 'downloadMap.pdf')
            }
          >
            Download
          </button>
        </div>

        <div className="grid-wrapper">
          <table className="grid-table">
            <tbody>
              {rows.map((rowArray, rowIndex) => (
                <tr key={rowIndex}>
                  {rowArray.map((stall, colIndex) => (
                    <td key={colIndex} className="stall-cell">
                      <div
                        className={`stall-content ${
                          stall.status === 'booked' ? 'booked' : 'available'
                        }`}
                      >
                        {showStallNumber && stall.number && (
                          <div className="stall-number">{stall.number}</div>
                        )}
                        <div className="stall-size">{stall.size}</div>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div className="legend">
            <label className="legend-item">
              <input type="checkbox" disabled className="checkbox booked" />
              <span>Booked</span>
            </label>
            <label className="legend-item">
              <input type="checkbox" disabled className="checkbox available" />
              <span>Available</span>
            </label>
          </div>
        </div>
      </div>

      <Participants />
    </>
  );
}
