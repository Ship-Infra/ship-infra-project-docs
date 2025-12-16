provider "aws" {
  region                   = "us-east-1"
  shared_credentials_files = ["./.aws-credentials"]
  profile                  = "terraform"
}

resource "aws_route53_zone" "main" {
  name = "ship-infra.com"
}

resource "aws_route53domains_registered_domain" "main" {
  domain_name = "ship-infra.com"

  # Current Name Servers
  dynamic "name_server" {
    for_each = aws_route53_zone.main.name_servers
    content {
      name = name_server.value
    }
  }

  # Vercel Nameservers
  name_server {
    name = "ns1.vercel-dns.com"
  }

  name_server {
    name = "ns2.vercel-dns.com"
  }
}
