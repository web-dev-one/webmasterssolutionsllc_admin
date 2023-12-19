resource "aws_cloudwatch_log_group" "wmsllc" {
  name              = "/ecs/wmsllc"
  retention_in_days = 5
}