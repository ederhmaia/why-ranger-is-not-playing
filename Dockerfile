FROM envoyproxy/envoy-dev:latest
COPY envoy.yml /etc/envoy/envoy.yml
RUN chmod go+r /etc/envoy/envoy.yml