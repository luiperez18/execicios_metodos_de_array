// Exercício 4: findIndex, some e every

const tasks = [
    { id: 1, title: "Concluir projeto", completed: false, priority: "alta" },
    { id: 2, title: "Ler emails", completed: true, priority: "média" },
    { id: 3, title: "Participar da reunião", completed: false, priority: "alta" },
    { id: 4, title: "Comprar mantimentos", completed: true, priority: "baixa" },
    { id: 5, title: "Estudar JavaScript", completed: false, priority: "média" }
];

// 1. Usando findIndex para encontrar a posição da tarefa "Participar da reunião"
const meetingIndex = tasks.findIndex(task => task.title === "Participar da reunião");
console.log("Índice da tarefa 'Participar da reunião':", meetingIndex);

// 2. Usando some para verificar se há pelo menos uma tarefa de alta prioridade
const hasHighPriorityTask = tasks.some(task => task.priority === "alta");
console.log("\\nExiste pelo menos uma tarefa de alta prioridade:", hasHighPriorityTask);

// 3. Usando every para verificar se todas as tarefas estão completas
const allTasksCompleted = tasks.every(task => task.completed);
console.log("\\nTodas as tarefas concluídas:", allTasksCompleted);

// 4. Combinando some e filter para encontrar tarefas incompletas de alta prioridade
const incompleteHighPriorityTasks = tasks.filter(
    task => !task.completed && task.priority === "alta"
);
console.log("\\nTarefas incompletas de alta prioridade:", incompleteHighPriorityTasks);

//DESAFIO PARA OS ALUNOS:

// a. Encontrar o índice da primeira tarefa incompleta
const firstIncompleteIndex = tasks.findIndex(task => !task.completed);
console.log("a. Índice da primeira tarefa incompleta:", firstIncompleteIndex);

// b. Verificar se existe alguma tarefa de baixa prioridade que já foi concluída
const hasCompletedLowPriority = tasks.some(task => task.priority === "baixa" && task.completed);
console.log("b. Existe tarefa de baixa prioridade concluída:", hasCompletedLowPriority);

// c. Verificar se todas as tarefas de alta prioridade estão incompletas
const allHighPriorityIncomplete = tasks
    .filter(task => task.priority === "alta") // pega só as de alta
    .every(task => !task.completed);          // verifica se todas estão incompletas
console.log("c. Todas as tarefas de alta prioridade estão incompletas:", allHighPriorityIncomplete);

// d. Encontrar o índice de uma tarefa com id = 10
const taskIndexById10 = tasks.findIndex(task => task.id === 10);
if (taskIndexById10 === -1) {
    console.log("d. Tarefa com id = 10 não encontrada.");
} else {
    console.log("d. Índice da tarefa com id = 10:", taskIndexById10);
}


