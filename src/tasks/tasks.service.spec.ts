import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';

const mockTasksRepository = () => ({
  getTasks: jest.fn(),
});

const mockUser = {
  username: 'Mahnaz',
  id: 'someId',
  password: 'somePassword',
  tasks: [],
};
describe('TaskService', () => {
  let tasksService: TasksService;
  let tasksRepository

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: TasksRepository,
          useFactory: mockTasksRepository,
        },
      ],
    }).compile();
    tasksService = await module.get(TasksService);
    tasksRepository = await module.get(TasksRepository);
  });
  describe('getTasks', () => {
    it('calls TaskRepository.getTasks and returns the result', async() => {
      tasksRepository.getTasks.mockResolvedValue('someValue')
      const result =await tasksService.getTasks(null,mockUser);
      expect(result).toEqual('someValue')
    });
  });
});
