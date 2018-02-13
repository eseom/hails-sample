export default ({ logger }) => [{
  name: 'test_command',
  handler() {
    logger.info('test_command executed successfully.')
    return 0
  },
}]
