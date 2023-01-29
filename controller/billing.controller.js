export const getBillingList = async (req, res) => {
  try {
    // const { sort, ...filter } = req.query;
    // const salaryRangeQuery = filter?.salary;
    // const sortJob = {};
    // if (salaryRangeQuery) {
    //   const salaryRange = { salary: salaryRangeQuery };
    //   const filterBySalaryStringify = JSON.stringify(salaryRange);
    //   let filterBySalary = filterBySalaryStringify.replace(
    //     /\b(lt|gt)\b/g,
    //     (match) => `$${match}`
    //   );
    //   filterBySalary = JSON.parse(filterBySalary);
    //   filter.salary = filterBySalary.salary;
    // }
    // if (sort) {
    //   sortJob.sortBy = sort.split(',').join(' ');
    // }

    const jobs = await getJobsService(filter, sortJob);
    res.status(200).json({
      status: 'Success',
      message: 'Successfully get all job',
      data: jobs,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};

export const createBilling = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      error: error.message,
    });
  }
};
