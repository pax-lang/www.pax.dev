#!/bin/bash

aws --profile=inclination s3 cp --recursive --acl=public-read ./src/ s3://www.pax.rs/
aws --profile=inclination cloudfront create-invalidation --distribution-id=E2IPWLWQB0SRVA --paths "/*"
