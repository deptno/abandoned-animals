import {defined} from '@deptno/aa_assert'

export const const_open_api_key = process.env.AA_OPENAPI_KEY!
export const const_aws_ddb_table = process.env.AA_DDB_TABLE!
export const const_ttl_days = parseInt(process.env.AA_TTL_DAYS ?? '1')
export const const_aws_region = process.env.AWS_REGION!

defined(!const_open_api_key)
