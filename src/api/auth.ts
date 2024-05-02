import useSWR from "swr";
import { useMemo } from "react";

import { fetcher, endpoints } from "src/utils/axios";

// import { IPostItem } from 'src/types/blog';

// ----------------------------------------------------------------------

export async function deleteTask(columnId: string, taskId: string) {
  /**
   * Work on server
   */
  // const data = { columnId, taskId };
  // await axios.post(endpoints.kanban, data, { params: { endpoint: 'delete-task' } });
  /**
   * Work in local
   */
  // mutate(
  //   URL,
  //   (currentData: any) => {
  //     const board = currentData.board as IKanban;
  //     const { tasks } = board;
  //     // current column
  //     const column = board.columns[columnId];
  //     const columns = {
  //       ...board.columns,
  //       [column.id]: {
  //         ...column,
  //         // delete tasks in column
  //         taskIds: column.taskIds.filter((id: string) => id !== taskId),
  //       },
  //     };
  //     // delete tasks in board.tasks
  //     delete tasks[taskId];
  //     return {
  //       ...currentData,
  //       board: {
  //         ...board,
  //         columns,
  //         tasks,
  //       },
  //     };
  //   },
  //   false
  // );
}
