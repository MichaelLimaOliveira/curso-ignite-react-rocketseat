import { useContext } from "react";
import { CycleContext } from "../../contexts/CyclesContext";
import { HistoyContainer, HistoryList, Status } from "./styles";

export function History() {
    const { cycles } = useContext(CycleContext);
    return (
        <HistoyContainer>
            <h1>Meu histórico</h1>
            <pre>{JSON.stringify(cycles, null, 2)}</pre>
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duraçao</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há cerca de 2 messes </td>
                            <td>
                                <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há cerca de 2 semanas </td>
                            <td>
                                <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há cerca de 2 messes </td>
                            <td>
                                <Status statusColor="green">Concluído</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há cerca de 2 messes </td>
                            <td>
                                <Status statusColor="yellow">
                                    Em andamento
                                </Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há cerca de 2 messes </td>
                            <td>
                                <Status statusColor="red">Interrompido</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoyContainer>
    );
}
