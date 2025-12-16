provider "aws" {
  region                   = "us-east-1"
  shared_credentials_files = ["./.aws-credentials"]
  profile                  = "terraform"
}

resource "aws_route53_zone" "main" {
  name = "ship-infra.com"
}
