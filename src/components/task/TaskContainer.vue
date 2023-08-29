<script setup lang="ts">
import { ref } from 'vue';

interface Task {
  id: number;
  description: string;
}

const descriptionTask = ref<string>('');
const listTasks = ref<Task[]>([]);
const errorTask = ref<boolean>(false);
const errorTaskMessages = ref<string[]>([]);

const validateTask = () => {
  errorTask.value = false;
  errorTaskMessages.value = [];
  if (!descriptionTask.value)
    errorTaskMessages.value.push('Entry description task*');
  if (errorTaskMessages.value.length > 0) errorTask.value = true;
  return errorTask.value;
};

const addTask = () => {
  if (validateTask()) {
    return;
  }
  alert('OK');
};
</script>

<template>
  <v-container>
    <v-card>
      <v-header>
        <h1>List of Task</h1>
        <nput
          type="text"
          v-model="descriptionTask"
          placeholder="Entry description task"
        />
        <pre>{{ descriptionTask }}</pre>
        <pre>{{ errorTask }}</pre>
        <pre>{{ errorTaskMessages }}</pre>
        <div
          v-for="(error, index) in errorTaskMessages"
          style="color: red; text-align: center"
        >
          <span>{{ error }}</span>
        </div>
      </v-header>
      <v-btn @click="addTask">Add Task</v-btn>
    </v-card>
  </v-container>
</template>
