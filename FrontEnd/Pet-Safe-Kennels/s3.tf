resource "aws_s3_bucket" "codepipeline_artifacts_next" {
  bucket = "${var.region}-${var.name}-artifacts-bucket"

  tags = {
    Name = "artifacts-bucket"
  }
}
