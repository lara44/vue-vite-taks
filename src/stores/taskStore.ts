import { defineStore } from 'pinia';

interface Task {
  id: number;
  description: string;
}

export const useTaskStore = defineStore('task', {
  state: () => {
    return {
      isDialogTask: false as boolean,
      task: {
        id: 0,
        description: '',
      } as Task,
      listTasks: [] as Task[],
    };
  },

  actions: {
    addTask(task: Task) {
      console.log(task);
      this.listTasks.push(task);
    },
  },
});
