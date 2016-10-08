angular.module("vendas").controller("produtoCtrl", function ($scope, $http) {
		$scope.novoProduto = function (produto) {
			$http.post("produto/novo", produto).success(function (resultadoDoResponse) {
				buscarProdutos();
				delete $scope.produto;
				$('#modal1').closeModal();
				Materialize.toast('Produto cadastrado com sucesso!', 4000) // 4000 is the duration of the toast
			});
		};
		
		$scope.deletarProduto = function (produto) {
			$http.post("produto/deletar", produto).success(function (resultadoDoResponse) {
				buscarProdutos();
				Materialize.toast('Produto removido com sucesso!', 4000)
			});
		};
		
		function buscarProdutos(){
			$http.get("produto/listar").success(function (resultado) {
				$scope.produtos = resultado;
			});
		};
		
		buscarProdutos();
	});
