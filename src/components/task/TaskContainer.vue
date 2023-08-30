<script setup lang="ts">
import TaskDialog from './TaskDialog.vue';
import { useTaskStore } from '../../stores/taskStore.ts';

const taskStore = useTaskStore();
</script>

<template>
  <v-container>
    <v-card max-width="600">
      <v-header>
        <h3 class="text-center">List of Task</h3>
        <v-btn
          color="#1976D2"
          size="small"
          @click="taskStore.isDialogTask = true"
          style="margin-left: 18px"
          >Add Task</v-btn
        ><br />
      </v-header>
      <v-card-text>
        <v-table density="compact">
          <thead>
            <tr v-if="taskStore.listTasks.length > 0">
              <th class="text-left">id</th>
              <th class="text-left">Description</th>
              <th class="text-left">Options</th>
            </tr>
            <tr v-else>
              <th class="text-center">There is not task</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in taskStore.listTasks" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.description }}</td>
              <td>
                <v-btn
                  density="compact"
                  icon="mdi-pencil mdi-18px"
                  color="#e59e06"
                ></v-btn>
                <v-btn
                  density="compact"
                  icon="mdi-delete mdi-18px"
                  color="#f2533a"
                ></v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </v-container>
  <template v-if="taskStore.isDialogTask">
    <TaskDialog />
  </template>
</template>
