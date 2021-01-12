import { Task } from "./task.entity";
import { Repository } from "typeorm";
import { CreateTaskDTO } from "./create-task.dto";
import { TaskDTO } from "./task.dto";
import { UpdateTaskDTO } from "./update-task.dto";
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    getOne(taskId: number): Promise<TaskDTO>;
    createOne(createTaskRequest: CreateTaskDTO): Promise<TaskDTO>;
    private entityToDTO;
    getAll(): Promise<TaskDTO[]>;
    updateOne(taskId: number, updateTaskRequest: UpdateTaskDTO): Promise<TaskDTO>;
    deleteOne(taskId: number): Promise<void>;
}
