terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "5.31.0"
    }
  }

  backend "s3" {
    bucket  = "webmasters-solutions-llc-tf-state"
    key     = "webmasters-solutions-llc.-statefile"
    region  = "us-east-2"
    encrypt = true
  }
}

provider "aws" {
  region = var.region
}