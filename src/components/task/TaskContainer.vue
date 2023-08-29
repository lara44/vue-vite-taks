<script setup lang="ts">
import TaskDialog from './TaskDialog.vue';
import { useTaskStore } from '../../stores/taskStore.ts';

const taskStore = useTaskStore();
</script>

<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-header>
        <h3 class="text-center">List of Task</h3>
        <v-btn
          color="primary"
          size="x-small"
          @click="taskStore.isDialogTask = true"
          >Add Task</v-btn
        ><br />
      </v-header>
      <v-card-text>
        <v-table density="compact">
          <thead>
            <tr>
              <th class="text-left">id</th>
              <th class="text-left">Description</th>
              <th class="text-left">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in taskStore.listTasks" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.description }}</td>
              <td>
                <v-btn
                  color="warning"
                  size="x-small"
                  @click="taskStore.isDialogTask = true"
                  >Edit</v-btn
                ><br />
                <v-btn
                  color="red"
                  size="x-small"
                  @click="taskStore.isDialogTask = true"
                  >Delete</v-btn
                ><br />
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
    <template>
      <TaskDialog />
    </template>
  </v-container>
</template>
