resource "aws_s3_bucket" "tfstate" {
  bucket = "${var.name}-tf-state"

  # For PROD ONLY 
  # lifecycle {
  #     prevent_destroy = true
  # }
}

resource "aws_s3_bucket_versioning" "yes" {
  bucket = aws_s3_bucket.tfstate.id
  versioning_configuration {
    status = "Enabled"
  }
}

resource "aws_s3_bucket_server_side_encryption_configuration" "default" {
  bucket = aws_s3_bucket.tfstate.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}

resource "aws_s3_bucket_public_access_block" "public_access" {
  bucket                  = aws_s3_bucket.tfstate.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

## Artifacts ##
resource "aws_s3_bucket" "codepipeline_artifacts" {
  bucket = "${var.name}-artifacts-bucket"

  tags = {
    Name = "artifacts-bucket"
  }
}