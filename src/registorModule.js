

/**
 * Registor module
 * ----------------
 */

const moduleList = {}

// module items
//  {
//    name: '', // name of module
//    module: [] // container or component file of module
//  }

const registorModule = (modules = []) => {
  // Mutation pattern
  moduleList = {
    ...moduleList,
    ...modules.reduce((prev, cur) => ({
      ...prev,
      [cur.name]: cur
    }), {})
  }
  return moduleList
}

export default registorModule
