import { TasksService } from "./tasks.service";
import { CreateTaskDTO } from "./create-task.dto";
import { UpdateTaskDTO } from "./update-task.dto";
export declare class TasksController {
    private readonly taskService;
    constructor(taskService: TasksService);
    getAll(): Promise<import("./task.dto").TaskDTO[]>;
    getOne(taskId: number): Promise<import("./task.dto").TaskDTO>;
    createOne(createTaskRequest: CreateTaskDTO): Promise<import("./task.dto").TaskDTO>;
    updateOne(taskId: number, updateTaskRequest: UpdateTaskDTO): Promise<import("./task.dto").TaskDTO>;
    deleteOne(taskId: number): Promise<void>;
}
