#!/bin/bash

aws --profile=inclination s3 cp --recursive --acl=public-read ./src/ s3://www.pax-lang.org/
aws --profile=inclination cloudfront create-invalidation --distribution-id=E2VGVLF1W3Z66M --paths "/*"
