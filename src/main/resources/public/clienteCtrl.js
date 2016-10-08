angular.module("vendas").controller("clienteCtrl", function ($scope, $http) {
	$scope.novoCliente = function (cliente) {
		$http.post("cliente/novo", cliente).success(function (resultadoDoResponse) {
			buscarClientes();
			delete $scope.cliente;
			$('#modal1').closeModal();
			Materialize.toast('Cliente cadastrado com sucesso!', 4000) // 4000 is the duration of the toast
		});
	};
	
	$scope.deletarCliente = function (cliente) {
		$http.post("cliente/deletar", cliente).success(function (resultadoDoResponse) {
			buscarClientes();
			Materialize.toast('Cliente removido com sucesso!', 4000)
		});
	};
	
	function buscarClientes(){
		$http.get("cliente/listar").success(function (resultado) {
			$scope.clientes = resultado;
		});
	};
	
	buscarClientes();
});
