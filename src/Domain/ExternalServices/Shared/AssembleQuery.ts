/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
import StringParser from '../../../Shared/Parsers/StringParser'

const AssembleQuery = (queryObject : any) => {
  let query = '?'

  const queryKeys = Object.keys(queryObject)
  const queryValues = Object.values(queryObject)

  queryKeys.forEach((key, index) => {
    const value = `${queryValues[index]}`
    if (index === 0) {
      query += `${key}=${StringParser.Normalize(value.replace(/ /g, '%20'))}`
    } else {
      query += `&${key}=${StringParser.Normalize(value.replace(/ /g, '%20'))}`
    }
  })

  return query
}

export default AssembleQuery
