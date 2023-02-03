export class Department {
  constructor(
    public DeptNo:number,
    public DeptName: string
  ){}
}

export const Departments:Array<Department> = new Array<Department>();
Departments.push(new Department(10, 'IT'));
Departments.push(new Department(20, 'HR'));
Departments.push(new Department(30, 'SL'));
Departments.push(new Department(40, 'AD'));


export class Employee {
  constructor(
    public EmpNo:number,
    public EmpName: string,
    public DeptNo: number
  ){}
}

export const Employees:Array<Employee> = new Array<Employee>();

Employees.push(new Employee(101, 'A', 10));
Employees.push(new Employee(102, 'B', 20));
Employees.push(new Employee(103, 'C', 30));
Employees.push(new Employee(104, 'D', 40));
Employees.push(new Employee(105, 'E', 10));
Employees.push(new Employee(106, 'F', 20));
Employees.push(new Employee(107, 'G', 30));
Employees.push(new Employee(108, 'H', 40));

