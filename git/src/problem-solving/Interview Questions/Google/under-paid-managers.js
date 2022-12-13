/**
 * 
 * 
Time: 45 minutes
Number of Questions: 1
If you solve early, other questions will be asked. Ideally solve quicker.

Question:
	Given an organization, containing employees and managers, calculate the number of underpaid managers. A mangers is said to be underpaid only when his salary is less than the average salary of all his employees.
	
	A(200)
	|
	|
	----B(150)
	----C(100)
		|
		|
		----D(250)
		
A is a manager - not underpaid
B is not a manager
C is a manager - underpaid
D is not a manager

class Emp {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
		this.children = [];
	}
}

 */

function getNumOfUnderpaidManagers(root) {
  let numOfUnderPaidManagers = 0;
  let managerList = {};

  if (root) {
    underPaidMangersHelper(root);
  }

  for (let manager of managerList) {
    if (manager.salary < manager.sumOfSalaries / manager.numOfEmps) {
      numOfUnderPaidManagers++;
    }
  }

  return numOfUnderPaidManagers;
}

function underPaidMangersHelper(node) {
  parentNode = node;
  for (let child of parentNode.children) {
    if (managerList[parentNode]) {
      managerList[parentNode].numOfEmps += 1;
      managerList[parentNode].sumOfSalaries += child.salary;
    } else {
      managerList[parentNode] = { salary: parentNode.salary, numOfEmps: 1, sumOfSalaries: child.salary };
    }
    underPaidMangersHelper(child);
  }
}