'use strict'

const TaskHook = exports = module.exports = {}

TaskHook.sendNewTaskMail = async (taskInstance) => {
  if (!taskInstance.user_id || !taskInstance.dirty.user_id) return

  const { email, username } = await taskInstance.user().fetch();
  const file = await taskInstance.file().fetch();

  const { title } = taskInstance

  await this.send(
    ['emails.new_task'],
    { username, title, hasAttachment: !!file },
    message => {
      message
        .to(email)
        .from('anna@hotmail.com', 'Anna')
        .subject('Nova tarefa para você'
        )
      if(file) {
        message.attach(Helpers.tmpPath(`uploads/${file.file}`)), {
          filename: file.name
        }
      }
    }
  )
}
