resource "aws_dynamodb_table" "aa" {
  name = "${terraform.workspace}-aa"
  hash_key = "hk"
  range_key = "rk"
  billing_mode = "PAY_PER_REQUEST"

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
}