import { Pipe, PipeTransform } from '@angular/core';
import { Container } from 'src/shared/container';

@Pipe({
  name: 'containerFilter',
})
export class ContainerFilterPipe implements PipeTransform {
  private filter(container: Container, filterStr: string): boolean {
    let matchName =
      container.image &&
      container.image
        .toLocaleLowerCase()
        .includes(filterStr.toLocaleLowerCase());
    let matchContainerId =
      container.containerId &&
      container.containerId
        .toLocaleLowerCase()
        .includes(filterStr.toLocaleLowerCase());
    return matchName || matchContainerId;
  }

  transform(
    containers: Container[],
    showContainerGroups: boolean,
    filterStr?: string
  ): Container[] {
    if (!containers) return [];
    if (showContainerGroups) {
      return containers.filter(container => this.filter(container, filterStr));
    } else {
      return containers.filter(
        container => !container.project && this.filter(container, filterStr)
      );
    }
  }
}
