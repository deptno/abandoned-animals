resource aws_dynamodb_table aa {
  name = "${terraform.workspace}-aa"
  hash_key = "hk"
  range_key = "rk"
  billing_mode = "PAY_PER_REQUEST"

  global_secondary_index {
    name = "rkT"
    hash_key = "rk"
    range_key = "t"
    projection_type = "ALL"
  }

  ttl {
    attribute_name = "ttl"
    enabled        = true
  }

  attribute {
    name = "hk"
    type = "S"
  }
  attribute {
    name = "rk"
    type = "S"
  }
  attribute {
    name = "t"
    type = "S"
  }
}