import { ComponentWithSuspense } from '../../components/ComponentWithSuspense/ComponentWithSuspense'
import { Workspace } from '../../components/Workspace/Workspace'

export const NewTodo = () => {
  return (
    <>
      <ComponentWithSuspense component={Workspace} />
    </>
  )
}
